import { useCallback, useRef } from "react";
import Webcam from "react-webcam";

/*const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: { exact: "user" }
};
*/
const Photo = () => {

  const webcamRef = useRef<any>(null);
  const capture = useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      console.log(imageSrc);
    },
    [webcamRef]
  );

  return (
    <>
      <Webcam
        audio={false}
        height={'inherit'}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={'inherit'}
        //videoConstraints={videoConstraints}
      />
      <button onClick={capture}>Capture photo</button>
    </>
  )

}

export default Photo;