import styled from 'styled-components';
import Image from 'components/Image/Image';

import libraryShelfImage from 'assets/images/nexus/Library_Shelf3.png';

const NexusLibrary = () => {
  return (
    <LibraryContainer>
      <BooksImage src={libraryShelfImage} />
    </LibraryContainer>
  );
};

const LibraryContainer = styled.div`
  display: flex;
`;

const BooksImage = styled(Image)`
  width: 100%;
  height: 100%;
`;

export default NexusLibrary;
