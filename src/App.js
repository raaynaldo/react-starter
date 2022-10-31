import Button from 'components/buttons/Button';

export default function App() {
  return (
    <div style={{ margin: '10px' }}>
      <div style={{ margin: '10px', display: 'flex', gap: '20px' }}>
        <Button variant='primary'>Primary</Button>
        <Button variant='secondary'>Secondary</Button>
        <Button variant='tertiary'>Tertiary</Button>
        <Button variant='ghost'>Ghost</Button>
        <Button variant='dark'>Dark</Button>
        <Button variant='light'>Light</Button>
      </div>

      <div style={{ margin: '10px', display: 'flex', gap: '20px' }}>
        <Button variant='primary' disabled={true}>
          Disabled
        </Button>
        <Button variant='secondary' disabled={true}>
          Disabled
        </Button>
        <Button variant='tertiary' disabled={true}>
          Disabled
        </Button>
        <Button variant='ghost' disabled={true}>
          Disabled
        </Button>
        <Button variant='dark' disabled={true}>
          Disabled
        </Button>
        <Button variant='light' disabled={true}>
          Disabled
        </Button>
      </div>

      <div style={{ margin: '10px', display: 'flex', gap: '20px' }}>
        <Button variant='primary' disabled={true} isLoading={true}>
          Disabled
        </Button>
        <Button variant='secondary' disabled={true} isLoading={true}>
          Disabled
        </Button>
        <Button variant='tertiary' disabled={true} isLoading={true}>
          Disabled
        </Button>
        <Button variant='ghost' disabled={true} isLoading={true}>
          Disabled
        </Button>
        <Button variant='dark' disabled={true} isLoading={true}>
          Disabled
        </Button>
        <Button variant='light' disabled={true} isLoading={true}>
          Disabled
        </Button>
      </div>
    </div>
  );
}
