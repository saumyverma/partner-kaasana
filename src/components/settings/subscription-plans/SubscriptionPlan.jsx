"use client";
import { Icon } from '@iconify/react/dist/iconify.js';
import { useState, useEffect } from 'react';
import subscriptionPlansData from './subscriptionPlansData.json';

const PlanCard = ({ plan }) => {
  const isWhiteTheme = plan.bgColor.includes('text-white');
  const textColorClass = isWhiteTheme ? 'text-white' : 'text-secondary-light';
  const titleColorClass = isWhiteTheme ? 'text-white' : '';
  
  return (
    <div className={`col-xxl-3 col-lg-6 col-sm-6 mb-4 d-flex`}>
      <div className={`card w-100 h-100 position-relative radius-24 overflow-hidden border-0 shadow-sm ${plan.bgColor} transition-all duration-300 hover-shadow-lg d-flex flex-column`}>
        {plan.isPopular && (
          <div className="position-absolute top-0 end-0 z-index-10">
            <span className="bg-white text-primary-600 px-16 py-6 radius-8 radius-top-end-24 radius-top-start-0 radius-bottom-start-8 radius-bottom-end-8 fw-semibold text-sm d-inline-block shadow-sm">
              Most Popular
            </span>
          </div>
        )}
        
        <div className="card-body p-40 d-flex flex-column flex-grow-1">
          {/* Header Section */}
          <div className="text-center mb-32">
            <div className="mb-12">
              <span className={`fw-semibold text-xs text-uppercase letter-spacing-1 ${textColorClass} opacity-75`}>
                {plan.subtitle}
              </span>
            </div>
            <h3 className={`mb-16 fw-bold ${titleColorClass} text-2xl`}>
              {plan.name}
            </h3>
            <p className={`mb-0 ${textColorClass} text-sm line-height-lg`}>
              {plan.description}
            </p>
          </div>

          {/* Price Section */}
          <div className="text-center mb-32 pb-24 border-bottom">
            <div className="d-flex align-items-baseline justify-content-center gap-8 mb-8">
              <h1 className={`mb-0 fw-bold ${titleColorClass} text-3xl`}>
                {plan.price}
              </h1>
              <span className={`fw-medium text-sm ${textColorClass} opacity-75`}>
                {plan.period}
              </span>
            </div>
            <span className={`${textColorClass} text-xs opacity-50`}>
              Billed {plan.period.replace('/', '')}
            </span>
          </div>

          {/* Features Section */}
          <div className="mb-32 flex-grow-1">
            <h6 className={`mb-24 fw-bold ${titleColorClass} text-center text-md`}>
              What's included
            </h6>
            <ul className="list-unstyled mb-0">
              {plan.features.map((feature, index) => (
                <li key={index} className="d-flex align-items-start gap-16 mb-20">
                  <span className={`w-28-px h-28-px d-flex justify-content-center align-items-center ${plan.checkIconBg} rounded-circle flex-shrink-0 mt-1 shadow-sm`}>
                    <Icon
                      icon="iconamoon:check-light"
                      className={`text-md ${isWhiteTheme ? 'text-primary-600' : 'text-white'}`}
                    />
                  </span>
                  <span className={`${textColorClass} text-sm flex-grow-1 line-height-lg`}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <div className="mt-auto">
            <button className="btn btn-primary w-100">
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const SubscriptionPlan = () => {
  const [plansData, setPlansData] = useState(subscriptionPlansData);
  const [activeTab, setActiveTab] = useState('monthly');

  // Optionally fetch from API in the future
  useEffect(() => {
    // You can add API call here to fetch real-time data
  }, []);

  const currentPlans = activeTab === 'monthly' ? plansData.monthly : plansData.yearly;

  return (
    <div className="row">
      {/* Monthly/Yearly Toggle Row */}
      <div className="col-12 mb-32">
        <div className="d-flex align-items-center justify-content-center">
          <div className="d-flex align-items-center radius-12 overflow-hidden bg-base">
            <button
              onClick={() => setActiveTab('monthly')}
              className={`px-40 py-16 fw-semibold text-md border-0 bg-transparent transition-all duration-300 ${
                activeTab === 'monthly' 
                  ? 'bg-primary-600 text-white' 
                  : 'text-secondary-light hover-bg-base'
              }`}
              style={{ borderRight: '1px solid rgba(0,0,0,0.1)' }}
            >
              Monthly
            </button>
            <button
              onClick={() => setActiveTab('yearly')}
              className={`px-40 py-16 fw-semibold text-md border-0 bg-transparent transition-all duration-300 ${
                activeTab === 'yearly' 
                  ? 'bg-primary-600 text-white' 
                  : 'text-secondary-light hover-bg-base'
              }`}
            >
              Yearly
            </button>
          </div>
        </div>
      </div>

      {/* Pricing Cards Row */}
      <div className="col-12 mt-24">
        <div className="row gy-4 align-items-stretch">
          {currentPlans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlan;
