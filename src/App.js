import Button from 'components/buttons/Button';

export default function App() {
  return (
    <div style={{ margin: '10px' }}>
      <div style={{ margin: '10px', display: 'flex', gap: '20px' }}>
        <Button variant='primary'>Primary</Button>
        <Button variant='secondary'>Secondary</Button>
        <Button variant='outline'>Outline</Button>
        <Button variant='ghost'>Ghost</Button>
      </div>

      <div style={{ margin: '10px', display: 'flex', gap: '20px' }}>
        <Button variant='primary' disabled={true}>
          Disabled
        </Button>
        <Button variant='secondary' disabled={true}>
          Disabled
        </Button>
        <Button variant='outline' disabled={true}>
          Disabled
        </Button>
        <Button variant='ghost' disabled={true}>
          Disabled
        </Button>
      </div>
    </div>
  );
}
