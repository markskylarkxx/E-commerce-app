package com.ecommerce.app.api;

import com.ecommerce.app.domain.Product;
import com.ecommerce.app.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.ColumnResult;
import java.util.List;

@RestController
@RequestMapping("api/v1")
@CrossOrigin(origins = "http://localhost:4200/")
public class ProductController {
    @Autowired
    private ProductService service;

    @GetMapping("/products")
     public ResponseEntity<List<Product>> getAllProduct(){
        List<Product> allProducts = service.getAllProduct();
        return  new ResponseEntity<>(allProducts, HttpStatus.OK);
    }

    // create product
    @PostMapping("/products")
    public  ResponseEntity<Product> createProduct(
                                                  @RequestBody Product product)throws Exception {
        Product product1 = service.createProduct(product);
        return  new ResponseEntity<>(product1, HttpStatus.CREATED);
    }
    @GetMapping("product/{id}")
    public  ResponseEntity<Product> getProductById(@PathVariable("id") Long id){
        Product productById = service.getProductById(id);
        return  new ResponseEntity<>(productById, HttpStatus.OK);
    }
    @PutMapping("products/{id}")
    public  ResponseEntity<Product>  updateProduct(@PathVariable("id") Long id, @RequestBody Product product){
        Product product1 = service.updateProduct(id, product);
        return  new ResponseEntity<>(product1, HttpStatus.OK);

    }
@DeleteMapping("products/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable("id") Long id){
        service.deleteProductById(id);
          return  new ResponseEntity<>("Product has been deleted", HttpStatus.OK);
    }
}
