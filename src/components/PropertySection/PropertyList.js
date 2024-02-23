import { Box, Grid } from '@chakra-ui/react';
import PropertyItem from './PropertyItem';

const PropertyList = ({ properties }) => {
  return (
    <Grid
      templateColumns="repeat(auto-fit, minmax(300px, 1fr))"
      placeContent="center"
      gap="32px"
    >
      {properties && properties.map((property) => (
        <Box maxW="380px" w="100%" marginInline="auto" key={property.id}>
          <PropertyItem property={property} />
        </Box>
      ))}
    </Grid>
  );
};

export default PropertyList;
