import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("Status from Props should be in the state", () => {
        const component = create(<ProfileStatus status="test" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("test");
    });
    test("after creation span should be displayed", () => {
        const component = create(<ProfileStatus status="test" />);
        const root = component.root;
        const span = root.findByType('span')
        expect(span.length).not.toBeNull();
    });
    test("after creation span should be displayed correct status", () => {
        const component = create(<ProfileStatus status="test" />);
        const root = component.root;
        const span = root.findByType('span')
        expect(span.props.children).toBe("Status: test");
    });
    test("after creation input should'nt be displayed ", () => {
        const component = create(<ProfileStatus status="test" />);
        const root = component.root;
               expect(() => {
            const input = root.findByType('input')
        }).toThrow();
    });
    test("callback the function updateStatus ", () => {
        let mockCallback = jest.fn()
        const component = create(<ProfileStatus status="test" updateStatus={mockCallback}/>);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});