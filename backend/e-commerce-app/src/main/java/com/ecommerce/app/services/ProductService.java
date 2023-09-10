package com.ecommerce.app.services;

import com.ecommerce.app.domain.Product;
import com.ecommerce.app.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    @Autowired
    private ProductRepository repository;

    public List<Product> getAllProduct(){
         return  repository.findAll();

    }
    public Product createProduct( Product productDetails) throws Exception {
    //   String photo = FileUploadService.uploadFile(file);
        Product product = new Product(productDetails.getName(),
                productDetails.getPrice(), productDetails.getImage(),
                productDetails.getDescription(), productDetails.getCategory());

         return repository.save(product);

    }
    // find product  by id;
    public Product getProductById(Long id){
        Optional<Product> optional = repository.findById(id);
        if (!optional.isPresent()){
            throw  new RuntimeException("product not found");

        }
        Product product = optional.get();
        return  product;
    }

    // update product;
    public  Product updateProduct(Long id, Product productDetails){
        Optional<Product> optional = repository.findById(id);
        if (!optional.isPresent()){
            throw  new RuntimeException("product not found");

        }
        Product product=  optional.get();
          product.setName(productDetails.getName());
          product.setPrice(productDetails.getPrice());
          product.setDescription(productDetails.getDescription());
          product.setCategory(productDetails.getCategory());
          product.setPrice(productDetails.getPrice());
          product.setImage(productDetails.getImage());

          return  repository.save(product);

    }

    public void deleteProductById(Long id) {
        repository.deleteById(id);
    }
}
