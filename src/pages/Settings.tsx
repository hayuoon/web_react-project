import React from 'react';
import {
  Typography,
  TextField,
  Button,
  Switch,
  FormControlLabel,
  Box,
  Divider,
  Card as MuiCard,
  CardContent,
  CardHeader
} from '@mui/material';

const Settings: React.FC = () => {
  const [settings, setSettings] = React.useState({
    siteName: 'BizWatch',
    emailNotifications: true,
    darkMode: false,
    language: 'ko',
  });

  const handleChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setSettings({
      ...settings,
      [field]: event.target.type === 'checkbox' ? event.target.checked : event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // TODO: API 연동
    console.log('설정 저장:', settings);
  };

  return (
    <div>
      <Typography variant="h4" sx={{ mb: 4 }}>
        설정
      </Typography>

      <form onSubmit={handleSubmit}>
        <MuiCard>
          <CardHeader title="일반 설정" />
          <CardContent>
            <TextField
              fullWidth
              label="사이트 이름"
              value={settings.siteName}
              onChange={handleChange('siteName')}
              margin="normal"
            />
            <TextField
              fullWidth
              label="언어"
              value={settings.language}
              onChange={handleChange('language')}
              margin="normal"
              select
              SelectProps={{
                native: true,
              }}
            >
              <option value="ko">한국어</option>
              <option value="en">English</option>
            </TextField>
          </CardContent>
        </MuiCard>

        <MuiCard sx={{ mt: 3 }}>
          <CardHeader title="알림 설정" />
          <CardContent>
            <FormControlLabel
              control={
                <Switch
                  checked={settings.emailNotifications}
                  onChange={handleChange('emailNotifications')}
                />
              }
              label="이메일 알림"
            />
          </CardContent>
        </MuiCard>

        <MuiCard sx={{ mt: 3 }}>
          <CardHeader title="테마 설정" />
          <CardContent>
            <FormControlLabel
              control={
                <Switch
                  checked={settings.darkMode}
                  onChange={handleChange('darkMode')}
                />
              }
              label="다크 모드"
            />
          </CardContent>
        </MuiCard>

        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
          >
            설정 저장
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Settings; 