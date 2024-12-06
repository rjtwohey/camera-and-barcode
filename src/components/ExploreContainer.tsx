import { IonButton } from '@ionic/react';
import './ExploreContainer.css';
import { Camera, CameraResultType } from '@capacitor/camera';
import { CapacitorBarcodeScanner, CapacitorBarcodeScannerOptions } from '@capacitor/barcode-scanner';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {

  const takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });
  
    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    var imageUrl = image.webPath;
  
    // Can be set to the src of an image now
    const imageElement = document.createElement('img');
    if (imageUrl) {
      imageElement.src = imageUrl;
    }
  }

  const barcodeScanner = async () => {
    const options: CapacitorBarcodeScannerOptions = {
      hint: 0
    };
    const res = await CapacitorBarcodeScanner.scanBarcode(options);
  }

  return (
    <div id="container">
      <IonButton onClick={takePicture}>Take Picture</IonButton>
      <IonButton onClick={barcodeScanner}>Scan Barcode</IonButton>
    </div>
  );
};

export default ExploreContainer;
