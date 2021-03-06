import React from 'react';
import { mount } from 'enzyme';
import Content from './Content';

describe('Content', () => {

    it('should apply the className if provided', () => {
        const content = mount(<Content className="test" />);
        expect(content.getDOMNode().className).toContain('test');
    });

    it('should wrap the content in a container', () => {
        const content = mount(<Content><span>test</span></Content>);
        expect(content.find('span').parent().props().className).toContain('u-container');
    });

});