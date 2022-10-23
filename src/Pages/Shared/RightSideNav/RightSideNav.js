import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaDiscord, FaFacebook, FaGithub, FaGoogle, FaTwitch, FaTwitter, FaWhatsapp } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarusel/BrandCarousel';


const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button className='mb-2' variant="outline-primary"><FaGoogle /> Login with Google</Button>
                <Button className='mb-3' variant="outline-dark"><FaGithub /> Login with Github</Button>
            </ButtonGroup>
            <div className='mt-4'>
                <h5 className='mb-2'>Find us on</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-3'><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaWhatsapp /> Whatsapp</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaTwitch /> Twitch</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaDiscord /> Discord</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default RightSideNav;