import React, { Component } from 'react';
import { TracksProps } from './types';
import { OtherProps } from '../types';
export declare class Tracks extends Component<TracksProps> {
    getTrackProps: (props?: OtherProps | undefined) => {
        onMouseDown: (e: React.MouseEvent<Element, MouseEvent>) => void;
        onTouchStart: (e: React.TouchEvent<Element>) => void;
    };
    render(): React.ReactNode;
}
