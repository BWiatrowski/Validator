/// <reference types="cypress" />

describe('Wykonywanie zapytania bezpośrednio do API', () => {
	beforeEach(function () {
		cy.fixture('example').then(data => {
			this.daneApi = data
		})
	})

	it('Autoryzacja + Dodawanie nowego artykułu', () => {
		const daneAutoryzacja = {
			user: {
				email: 'bwiater@test2.pl',
				password: 'bwiater123',
			},
		}

        const daneArtykul = {
			"article": { 
				"title": "Test bezspośrednio z API to jest", 
				"description": "Test", 
				"body": "Test", 
				"tagList": []
			}
		}

		cy.request('POST', 'https://api.realworld.io/api/users/login', daneAutoryzacja)
			.its('body').then(res => {
				const authToken = res.user.token;
                
                cy.request({
                    method: "POST",
                    url: "https://api.realworld.io/api/articles/",
                    body: daneArtykul,
					headers: {
						'Authorization': 'Token ' + authToken
					}
                }).then(res => {
					expect(res.status).to.equal(200)
				})
			})	
		})
	})
