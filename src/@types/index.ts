// UPDATES PAGE TYPES
interface annoucements {
  title: string;
  description: string;
  profilePic: string;
  userName: string;
}

interface bestEmployee {
  name: string;
  image: string;
}

// REMINDERS PAGE TYPES

interface reminder {
  title: string;
  description: string;
  image: string;
}

export type { annoucements, bestEmployee, reminder };
