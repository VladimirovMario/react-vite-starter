export function HydrateFallback() {
  const styles = () => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    width: '100%',
  });

  return (
    <section style={styles()}>
      <p>Loading, please wait...</p>
    </section>
  );
}
