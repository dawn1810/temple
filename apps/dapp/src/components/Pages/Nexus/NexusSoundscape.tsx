import Image from 'components/Image/Image';
import nexusSoundtrack from 'assets/sounds/m08-buf2.mp3';
import ReactHowler from 'react-howler';
import playingIcon from 'assets/icons/sound_icon.png';
import stoppedIcon from 'assets/icons/sound_icon_off.png';
import { useState } from 'react';
import styled from 'styled-components';

const SOUNDSCAPE_VOLUME = 0.15;

export const NexusSoundscape = () => {
  const [volume, setVolume] = useState(SOUNDSCAPE_VOLUME);

  const icon = volume > 0 ? playingIcon : stoppedIcon;

  const soundIconClickHandler = () => {
    const isPlaying = volume > 0;
    const newVolume = isPlaying ? 0 : SOUNDSCAPE_VOLUME;
    setVolume(newVolume);
  };

  return (
    <FullScreenContainer>
      <NexusSoundscapeContainer>
        <SoundscapeIcon src={icon} onClick={soundIconClickHandler} />
        <ReactHowler src={nexusSoundtrack} playing={true} volume={volume} />
      </NexusSoundscapeContainer>
    </FullScreenContainer>
  );
};

const FullScreenContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 9;
`;

const SoundscapeIcon = styled(Image)`
  width: 50px;
  height: 50px;
`;

const NexusSoundscapeContainer = styled.div`
  position: fixed;
  cursor: pointer;
  bottom: 0;
  right: 0;
  margin-right: 100px;
  margin-bottom: 100px;
`;
