# Image gradient, react component 
React native package to display a gradient filter over an image.

To install run `npm install react-native-image-gradient -s`.

## Usage 
```javascript 
import ImageGradient from 'react-native-image-gradient';

...

render(){
    return (
        <ImageGradient 
            mainStyle={styles.YOURS}
            gradientStyle={styles.YOURS}
            localImage={true|false}
            imageUrl={localReference|webReference}
            startPosition ={{x:0,y:0}}
            rgbcsvStart={'255,255,255'}
            rgbcsvEnd={'0,0,0'}
        >
            <...>

        </ImageGradient>
    )
}
```

## Props 

* **mainStyle** - styling for the main view component
* **gradientStyle** - styling for the iner view containing gradient view
* **imageUrl** - local or web path to the image. (if using web path, please set the localImage prop to false)
* **localImage** - flag to specify wether the path is local or not. Default: true
* **startPosition** - initial coordinates for the gradient effect
* **rgbcsvStart** - color (in csv format) for the beginning of the linear gradient. Default: black `('255,255,255')`
* **rgbcsvEnd** - color (in csv format) for the end of the linear gradient. Default: white `('0,0,0')`

> PS : All props are optional