import React from 'react';
import { Card as MuiCard, CardContent, CardHeader, Typography, Box } from '@mui/material';

interface CardProps {
  title?: string;
  children: React.ReactNode;
  action?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children, action }) => {
  return (
    <MuiCard sx={{ mb: 2 }}>
      {title && (
        <CardHeader
          title={title}
          action={action}
          titleTypographyProps={{ variant: 'h6' }}
        />
      )}
      <CardContent>
        <Box sx={{ p: 1 }}>
          {children}
        </Box>
      </CardContent>
    </MuiCard>
  );
};

export default Card; 