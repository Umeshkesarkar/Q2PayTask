import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';

const ProductDetailsU = ({ route }) => {
  const { productId } = route.params;
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProductDetails();
  }, []);

  const fetchProductDetails = async () => {
    try {
        const response = await fetch(`https://dummyjson.com/products/${productId}`);
      const data = await response.json();
      setProduct(data);
    //   setLoading(false);
    } catch (error) {
      console.error(error);
    } finally {
        setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.productImageContainer}>
          <Image source={{ uri: product.thumbnail}} style={styles.productImage} />
      </View>
      
      <Text style={styles.productName}>Product Name :- <Text style={styles.productName}>{product.title}</Text> </Text>
      {/* <Text style={styles.productName}>{product.brand}</Text> */
      <Text style={styles.productPrice}>Price :-<Text style={styles.productPrice}>{product.price} $ </Text></Text>}
      <Text style={styles.productDescription}>Product Rating :- <Text style={styles.productDescription}>{product.rating}</Text></Text>
      <Text style={styles.productDescription}>Stock Left :- <Text style={styles.productDescription}>{product.stock}</Text></Text>
      <Text style={styles.productbrand}>Brand Name :- <Text style={styles.productName}>{product.brand}</Text></Text>
      <Text style={styles.productDescription}>{product.description}</Text>

      
      
      
      {/* <Text style={styles.productPrice}>{product.price}</Text> */}
      

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 20,
    alignItems: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productImageContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: 'hidden',
    marginRight: 20, // Added marginRight
    marginBottom:50
  },
  productImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 18,
    color: '#000000',
  },
  productDescription: {
    fontSize: 20,
    marginBottom: 15,
    fontWeight: 'bold',
    color: '#000000',
  },
  productPrice: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#000000',
  },
  productbrand: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#000000',
  },
});

export default ProductDetailsU;