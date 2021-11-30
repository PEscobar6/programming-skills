jest.mock('../../controllers/PersonController', () => {
    return {
        createPerson: jest.fn(() => {

        }),
        getAllPerson: jest.fn(() => {
            return {
                status:         200,
                title:          'Congrats',
                message:        'Congrats',
                icon:           'success',
                details:        []
            }
        })
    }
});

describe('PersonController', () => {
    describe('getAllPerson', () => {
        test('should return an object with the structure of the response', () => {
            const response = getAllPerson();
            console.log(response);
        });
    });
});