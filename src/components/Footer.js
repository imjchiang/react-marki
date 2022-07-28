import React from 'react';
import { motion } from 'framer-motion';

const Footer = () =>
{
    return(
        <motion.div className='footer'
            key='home'
            initial={{opacity:0}}
            animate={{opacity:1, transition:{duration:1}}}
            exit={{opacity:0, transition:{duration:1}}}>
            © 2022 MarKi Co., Ltd. All rights reserved.
        </motion.div>
    )
}

export default Footer;