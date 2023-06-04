from django.contrib import admin
from .models import Category, Brand, Warranty, Seller, Product

admin.site.register(Category)
admin.site.register(Brand)
admin.site.register(Warranty)
admin.site.register(Seller)

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'brand', 'warranty', 'seller', 'price', 'old_price','display_image')
    list_filter = ('category', 'brand', 'warranty', 'seller')
    search_fields = ('name', 'category__name', 'brand__name', 'warranty__name', 'seller__name')

    def display_image(self, obj):
        if obj.image:
            return f'<img src="{obj.image.url}" width="50" height="50" />'
        return 'No image'

    display_image.short_description = 'Image'
    display_image.allow_tags = True
