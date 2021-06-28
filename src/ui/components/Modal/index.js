import { theme } from '@sqymagma/theme';
import { AnimatePresence, motion } from 'framer-motion';
import * as React from 'react';
import styled, { createGlobalStyle, css } from 'styled-components';
import Portal from '../Portal';

const LockBody = createGlobalStyle`
  body {
    ${(p) =>
      p.lock &&
      css`
        overflow: hidden;
      `}
  }
`;

const OuterMotionDiv = styled(motion.div)`
  background-color: ${theme('colors.overlay01')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  overflow: scroll;
`;

const InnerMotionDiv = styled(motion.div)`
  align-items: flex-start;
  height: 100%;
  padding: 70px 16px;
  ${theme('mq.m')} {
    padding: 70px 60px;
  }
`;
const Modal = ({ children, open }) => {
  return (
    <AnimatePresence>
      {open && (
        <Portal selector="#modal">
          <LockBody lock />
          <OuterMotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            exit={{ opacity: 0 }}
          >
            <InnerMotionDiv
              initial={{ y: 40 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6 }}
              exit={{ y: -40 }}
            >
              {children}
            </InnerMotionDiv>
          </OuterMotionDiv>
        </Portal>
      )}
    </AnimatePresence>
  );
};

export default Modal;
