function RouteFallback({ message = 'Loading...' }) {
  const styles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '70vh',
    width: '100%',
  };

  return (
    <section style={styles}>
      <p>{message}</p>
    </section>
  );
}

export default RouteFallback;
