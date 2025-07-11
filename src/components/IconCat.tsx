export function IconCat() {
  return (
    <img
      src="./img/logo.png"
      alt=" Icon"
      style={{
        width: '2rem',
        height: '2rem',
        color: 'var(--ifm-color-primary)', // Note: This style might not work as expected for images, consider using filter for color change if needed.
      }}
    />
  );
}
