export interface NavItem {
  name: string;
  path: string;
  description: string;
}

export const NAV_ITEMS: NavItem[] = [
  {
    name: 'Home',
    path: '/',
    description: 'Main overview and exploration of project topics',
  },
  {
    name: 'Introduction',
    path: '/introduction',
    description: 'Understand the meaning, objectives, and importance of management and customer satisfaction.',
  },
  {
    name: 'Role of Management',
    path: '/role-of-management',
    description: 'Explore the responsibilities of managers in improving customer experiences and service quality.',
  },
  {
    name: 'Customer Satisfaction',
    path: '/customer-satisfaction',
    description: 'Learn about customer expectations, satisfaction factors, feedback, and measurement.',
  },
  {
    name: 'Management Strategies',
    path: '/management-strategies',
    description: 'Discover practical strategies for improving customer service, communication, and complaint handling.',
  },
  {
    name: 'Benefits',
    path: '/benefits',
    description: 'Understand how customer satisfaction improves loyalty, reputation, retention, and business growth.',
  },
  {
    name: 'Case Study',
    path: '/case-study',
    description: 'Explore a practical fictional example of how management can improve customer satisfaction.',
  },
  {
    name: 'Conclusion',
    path: '/conclusion',
    description: 'Review the important lessons and key findings from the project.',
  },
];

export interface FeedbackSubmission {
  id: string;
  name: string;
  rating: number;
  message: string;
  timestamp: string;
}
