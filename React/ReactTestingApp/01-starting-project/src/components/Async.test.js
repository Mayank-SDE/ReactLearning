import { render, screen } from "@testing-library/react";
import Async from './Async';
describe('Async test component', () => {
    test('renders posts if request succeds', async () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => {
                return [{
                    id: "1",
                    title: "title named"
                }];
            }
        });
        render(<Async />);
        const listItemElements = await screen.findAllByRole('listitem');
        expect(listItemElements).not.toHaveLength(0);
    });
});