import { Button, Container } from '@mui/material';
import { useState } from 'react';

const Main = () => {
    const [count, setCount] = useState(1);

    return (
        <Container>
            hello world count is {count} <br />
            to increment count, click the button below <br />
            <Button onClick={() => setCount(count + 1)}>increment</Button>
        </Container>
    );
};

export default Main;
