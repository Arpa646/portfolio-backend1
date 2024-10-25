export interface IExperience {
    title: string;
    description: string;
    company: string;
    startDate: Date;
    endDate: Date | null; // Can be null if the experience is ongoing
    location: string;
// Assuming each experience is tied to a specific user (foreign key reference)
  }
  