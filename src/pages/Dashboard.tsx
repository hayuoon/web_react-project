import React from 'react';
import { Grid, Typography } from '@mui/material';
import Card from '../components/common/Card';

const Dashboard: React.FC = () => {
  return (
    <div>
      <Typography variant="h4" sx={{ mb: 4 }}>
        대시보드
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={3}>
          <Card title="총 사용자">
            <Typography variant="h3">1,234</Typography>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6} lg={3}>
          <Card title="오늘의 방문자">
            <Typography variant="h3">123</Typography>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6} lg={3}>
          <Card title="신규 가입자">
            <Typography variant="h3">45</Typography>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6} lg={3}>
          <Card title="활성 사용자">
            <Typography variant="h3">789</Typography>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card title="최근 활동">
            {/* 여기에 차트나 테이블이 들어갈 예정 */}
            <Typography>최근 활동 데이터가 여기에 표시됩니다.</Typography>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard; 