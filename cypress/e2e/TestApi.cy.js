describe('Notes API Tests', () => {
    it('Register',  () => {
        cy.request({
            method: 'POST',
            url: 'https://practice.expandtesting.com/notes/api/users/register',
            body: {
                name: 'john',
                email: 'zazo9800@gmail.com',
                password: 'zazo33' 
            }

        })
    });

    it('Login', () => {
        
      cy.request({
        method: 'POST',
        url: 'https://practice.expandtesting.com/notes/api/users/login',
        headers: {
            
            'Content-Type': 'application/json'
          },
          body: {
            email: 'zazo9800@gmail.com',
            password: 'zazo33'
          }
        });
        
      });
    });