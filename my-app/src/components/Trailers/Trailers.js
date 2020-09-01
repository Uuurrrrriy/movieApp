import React from 'react';
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

export const Trailers = (props) => {
    const { key, name } = props.trailer;
    return (
        <div>
            <a href={`https://www.youtube.com/watch?v=${key}`}>
                <Button variant="secondary">
                    {
                        name
                    }
                </Button>
            </a>
        </div>
    );
};
