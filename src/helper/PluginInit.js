"use client";
import { useEffect } from "react";
export default function PluginInit() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      require("bootstrap/dist/js/bootstrap.bundle.min.js");
      require("jsvectormap/dist/jsvectormap.css");
      require("react-toastify/dist/ReactToastify.css");
      require("react-modal-video/css/modal-video.min.css");

      // Universal fix for nested modal dropdown z-index
      let previousNestedModalState = false;
      
      const checkIfNestedModal = () => {
        const allModals = document.querySelectorAll('.modal.show, .modal[style*="z-index"], .modal[style*="zIndex"]');
        for (const modal of allModals) {
          const style = modal.getAttribute('style') || '';
          const zIndexMatch = style.match(/z-index:\s*(\d+)|zIndex:\s*(\d+)/i);
          const zIndex = zIndexMatch ? parseInt(zIndexMatch[1] || zIndexMatch[2]) : 0;
          if (zIndex >= 1065 || modal.hasAttribute('data-nested')) {
            return true;
          }
        }
        return false;
      };

      const handleNestedModalDropdowns = () => {
        const hasNestedModal = checkIfNestedModal();

        // If nested modal just opened, close all open dropdowns
        if (hasNestedModal !== previousNestedModalState && hasNestedModal) {
          // Close all open react-select dropdowns from main modal
          document.querySelectorAll('.select__control input').forEach(input => {
            const selectControl = input.closest('.select__control');
            if (selectControl) {
              const modal = selectControl.closest('.modal');
              if (modal) {
                const style = modal.getAttribute('style') || '';
                const zIndexMatch = style.match(/z-index:\s*(\d+)|zIndex:\s*(\d+)/i);
                const zIndex = zIndexMatch ? parseInt(zIndexMatch[1] || zIndexMatch[2]) : 0;
                if (zIndex < 1065 && !modal.hasAttribute('data-nested')) {
                  input.blur();
                }
              } else {
                input.blur();
              }
            }
          });
        }
        
        previousNestedModalState = hasNestedModal;

        // Get all react-select dropdown menus (portaled to body)
        const allMenus = document.querySelectorAll('.select__menu-portal, .select__menu');

        allMenus.forEach((menu) => {
          if (hasNestedModal) {
            // Check if the active element (focused input) is in a nested modal
            const activeElement = document.activeElement;
            let isFromNestedModal = false;
            
            if (activeElement) {
              const selectControl = activeElement.closest('.select__control');
              if (selectControl) {
                const modal = selectControl.closest('.modal');
                if (modal) {
                  const style = modal.getAttribute('style') || '';
                  const zIndexMatch = style.match(/z-index:\s*(\d+)|zIndex:\s*(\d+)/i);
                  const zIndex = zIndexMatch ? parseInt(zIndexMatch[1] || zIndexMatch[2]) : 0;
                  isFromNestedModal = zIndex >= 1065 || modal.hasAttribute('data-nested');
                }
              }
            }

            if (isFromNestedModal) {
              // This dropdown is from nested modal - give it high z-index
              menu.style.zIndex = '10010';
              menu.style.display = '';
              menu.style.visibility = '';
              menu.style.opacity = '';
              menu.setAttribute('data-nested-dropdown', 'true');
            } else {
              // This dropdown is from main modal - hide it
              menu.style.zIndex = '1000';
              menu.style.display = 'none';
              menu.style.visibility = 'hidden';
              menu.style.opacity = '0';
              menu.removeAttribute('data-nested-dropdown');
            }
          } else {
            // No nested modal, restore normal z-index
            menu.style.zIndex = '9999';
            menu.style.display = '';
            menu.style.visibility = '';
            menu.style.opacity = '';
            menu.removeAttribute('data-nested-dropdown');
          }
        });
      };

      // Run on mount and set up observers
      handleNestedModalDropdowns();

      // Observe DOM changes for modals and dropdowns
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          // Check if a new dropdown menu was added
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === 1) {
              if (node.classList && (node.classList.contains('select__menu-portal') || node.classList.contains('select__menu'))) {
                // New dropdown opened - check which modal it belongs to
                setTimeout(() => {
                  const activeElement = document.activeElement;
                  if (activeElement) {
                    const selectControl = activeElement.closest('.select__control');
                    if (selectControl) {
                      const modal = selectControl.closest('.modal');
                      if (modal) {
                        const style = modal.getAttribute('style') || '';
                        const zIndexMatch = style.match(/z-index:\s*(\d+)|zIndex:\s*(\d+)/i);
                        const zIndex = zIndexMatch ? parseInt(zIndexMatch[1] || zIndexMatch[2]) : 0;
                        const isNestedModal = zIndex >= 1065 || modal.hasAttribute('data-nested');
                        
                        if (isNestedModal) {
                          node.style.zIndex = '10010';
                          node.setAttribute('data-nested-dropdown', 'true');
                        } else {
                          const hasNested = checkIfNestedModal();
                          if (hasNested) {
                            node.style.zIndex = '1000';
                            node.style.display = 'none';
                            node.style.visibility = 'hidden';
                            node.style.opacity = '0';
                          }
                        }
                      }
                    }
                  }
                  handleNestedModalDropdowns();
                }, 10);
              }
            }
          });
        });
        
        // Small delay to ensure DOM is updated
        setTimeout(handleNestedModalDropdowns, 50);
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['style', 'class', 'data-nested']
      });

      // Also listen for modal show/hide events
      const handleModalEvent = () => {
        setTimeout(handleNestedModalDropdowns, 100);
      };
      
      document.addEventListener('show.bs.modal', handleModalEvent);
      document.addEventListener('hide.bs.modal', handleModalEvent);
      document.addEventListener('shown.bs.modal', handleModalEvent);
      document.addEventListener('hidden.bs.modal', handleModalEvent);

      // Cleanup
      return () => {
        observer.disconnect();
        document.removeEventListener('show.bs.modal', handleModalEvent);
        document.removeEventListener('hide.bs.modal', handleModalEvent);
        document.removeEventListener('shown.bs.modal', handleModalEvent);
        document.removeEventListener('hidden.bs.modal', handleModalEvent);
      };
    }
  }, []);
  return <></>;
}
