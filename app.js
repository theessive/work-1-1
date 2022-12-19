var obj = {
    data() {
      return {
        name: '',
        date: '',
        countProduct: 0,
        priceOnProduct: 0,
        products: []
        }
       },
    computed: {
      totalWithoutTax() {
           return this.products.reduce((acc, employee) => acc + employee.priceOnProduct, 0)
       },
       totalWithTax() {
         return this.products.reduce((acc, employee) => acc + employee.priceOnProduct * 0.85, 0)
      }
     },


    methods: {
      addProduct() {
  
        if (this.name && this.date && this.countProduct && this.priceOnProduct) {
             this.products.push({
              name: this.name,
            date: this.date,
            countProduct: this.countProduct,
            priceOnProduct: this.priceOnProduct
          })
          this.name = ''
           this.date = ''
           this.countProduct = 0
            this.priceOnProduct = 0
        } else {
           alert('Please fill in all fields')
        }
      },
          removeProduct(index) {
            this.products.splice(index, 1)
       }
     }
    }
    
  
  
  
  
         Vue.createApp(obj).mount('#app')