
  
const backgroundRecetaComponent = () => {
  return (
    <div>
      Image at public/gfgPublic.png: <br />
      <img src={process.env.PUBLIC_URL + "/images/backgroundReceta.jpg"} />
      <br />
  
    </div>
  );
};
  
export default backgroundRecetaComponent;