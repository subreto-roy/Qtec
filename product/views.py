from django.shortcuts import render
from .models import Product, Category, Brand, Warranty, Seller

def product_category_view(request):
    
    products = Product.objects.all()

 
    categories = Category.objects.all()
    brands = Brand.objects.all()
    warranties = Warranty.objects.all()
    sellers = Seller.objects.all()
   

    context = {
        'products': products,
        'categories': categories,
        'brands': brands,
        'warranties': warranties,
        'sellers': sellers,
    }

    return render(request, 'index.html', context)


   

