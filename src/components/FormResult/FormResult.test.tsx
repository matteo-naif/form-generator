import { it, describe, expect } from 'vitest';
import FormResult from './FormResult';
import { render, screen } from '../../utils/test-utils';

const data = {
    name: 'Matteo',
    age: 29,
};

describe('Render the component FormResult', () => {
    it('show a placeholder if data is null', () => {
        render(<FormResult data={null} />);
        expect(screen.getByRole('placeholder')).toBeInTheDocument();
    });
    it('show data in JSON format if data is an object', () => {
        const { container } = render(<FormResult data={data} />);
        const pre = container.querySelector('pre');
        const content = pre?.innerHTML;
        expect(content).toBe(JSON.stringify(data, null, 2));
    });
});
