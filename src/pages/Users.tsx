import React from 'react';
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Box
} from '@mui/material';
import Card from '../components/common/Card';
import Loading from '../components/common/Loading';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
}

const Users: React.FC = () => {
  const [loading, setLoading] = React.useState(true);
  const [users, setUsers] = React.useState<User[]>([]);

  React.useEffect(() => {
    // TODO: API 연동
    setTimeout(() => {
      setUsers([
        { id: 1, name: '홍길동', email: 'hong@example.com', role: '관리자', status: '활성' },
        { id: 2, name: '김철수', email: 'kim@example.com', role: '사용자', status: '활성' },
        { id: 3, name: '이영희', email: 'lee@example.com', role: '사용자', status: '비활성' },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
        <Typography variant="h4">
          사용자 관리
        </Typography>
        <Button variant="contained" color="primary">
          사용자 추가
        </Button>
      </Box>

      <Card>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>이름</TableCell>
                <TableCell>이메일</TableCell>
                <TableCell>권한</TableCell>
                <TableCell>상태</TableCell>
                <TableCell>작업</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>{user.status}</TableCell>
                  <TableCell>
                    <Button size="small" sx={{ mr: 1 }}>수정</Button>
                    <Button size="small" color="error">삭제</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  );
};

export default Users; 