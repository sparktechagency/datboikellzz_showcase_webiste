export interface SubscriptionFeature {
    id: number;
    text: string;
  }
  
  export interface SubscriptionPlan {
    _id: string;
    subscriptionType: string;
    duration: 'daily' | 'monthly';
    price: number;
    features: string[];
    createdAt: string;
    updatedAt: string;
  }
  
  export interface TransformedPlan {
    id: string;
    name: string;
    duration: 'daily' | 'monthly';
    displayName: string;
    price: string;
    period: string;
    features: SubscriptionFeature[];
    createdAt: string;
    updatedAt: string;
  }
  
  export interface PlansByDuration {
    daily: TransformedPlan[];
    monthly: TransformedPlan[];
  }
  
  export interface PlanSelection {
    duration: 'daily' | 'monthly';
    planType: string;
  }