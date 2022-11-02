import { it, describe, expect, vi } from 'vitest';
import FormUser from './FormUser';
import { render, screen, userEvent } from '../../utils/test-utils';

const mock = {
    onSubmit(data: any) {
        console.log(data);
    },
};

describe('Render the component FormUser', () => {
    it('show a form', () => {
        const { container } = render(
            <FormUser onSubmit={mock.onSubmit} formData={[]} />
        );
        const form = container.querySelector('form');
        expect(form).toBeInTheDocument();
    });
    it('run onSubmit fn if click the button', async () => {
        const onSubmitSpy = vi.fn().mockImplementation(mock.onSubmit);
        render(<FormUser onSubmit={onSubmitSpy} formData={[]} />);
        // Click returns a Promise
        await userEvent.click(screen.getByRole('button'));
        expect(onSubmitSpy).toHaveBeenCalledTimes(1);
    });
});
