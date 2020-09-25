import React from 'react';
import { create } from 'react-test-renderer';
import ProfileStatus from "./ProfileStatus";

describe('ProfileStatusComponent', () => {
    test('status from props should be in the state', () => {
        const component = create(<ProfileStatus status={'Itacher - tacher'} />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe('Itacher - tacher');
    });
    test('after creation span with status should be displayed', () => {
        const component = create(<ProfileStatus status={'Itacher - tacher'} />);
        const root = component.root;
        const span = root.findByType('span');
        expect(span).not.toBeNull();
    });
    test('after creation span with status should be displayed c status', () => {
        const component = create(<ProfileStatus status={'Itacher - tacher'} />);
        const root = component.root;
        const span = root.findByType('span');
        expect(span.children[0]).toBe('Itacher - tacher');
    });
});