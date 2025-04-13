import { Pressable, View } from 'react-native';
import { Image, type ImageSource } from 'expo-image';

type EmojiStickerProps = {
  imageSize: number;
  stickerSource: ImageSource;
};

export default function EmojiSticker({ imageSize, stickerSource }: EmojiStickerProps) {
  return (
    <View style={{ top: -350 }}>
      <Pressable
        onPress={(data) => {
          console.log(data);
        }}
      >
        <Image source={stickerSource} style={{ width: imageSize, height: imageSize }} />
      </Pressable>
    </View>
  );
}
