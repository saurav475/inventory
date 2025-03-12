export class UserMock {
    private users: any[];
  
    constructor() {
      // Initialize the mock data
      this.users = [

      {
        "id": 1,
        "username": "sourav",
        "email": "sourav@gmail.com",
        "role": "CUSTOMER"
      },
      {
        "id": 2,
        "username": "sourav2",
        "email": "sourav2@gmail.com",
        "role": "CUSTOMER"
      }
      ];
    }
  
    findAll(): any[] {
      // Return the mocked users
      return this.users;
    }
  
    findOne(id: number): any {
      // Find the user with the specified ID from the mocked data
      return this.users.find((user) => user.id === id);
    }
  
    // Add more mock methods as needed
  }
