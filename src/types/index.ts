export interface FeedbackItem {
  id: string;
  source: 'Zendesk' | 'Intercom' | 'App Store';
  content: string;
  priorityScore: number;
}

