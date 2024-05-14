export default function Tabs({ children, buttons, ButtonsContainer = 'menu' }) { //default props value is 'menu' here
  // const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
