export const apiRoutes = {
    // Team API
    useTeamQuery: '/team/my',
    useTeamCreateMutation: '/team/create',
  
    // User API
    useUserQuery: '/user',
    useUserLogin: '/user/login',
    useUserRegister: '/user/register',
    useUserLogout: '/user/logout',
    useUserProfile: '/user/profile',
    useProfileMutation: '/user/update',
    useChangePasswordMutation: '/user/change-password',
    useTelegramIDConnect: "/user/connect-tg-id",
  
    // Media API
    useMediaUpload: '/media/upload64',
  
    // Product Management API
    useProductQuery: '/products',
    useCategoryQuery: '/categories',
    useUnitQuery: '/units',
    useCreateProductMutation: '/product/store',
    useDeleteProductMutation: '/product/disabled',
    useCreateCategoryMutation: '/product/store/category',
    useDeleteCategoryMutation: '/product/delete-category',
    useCreateUnitMutation: '/product/store/unit',
    useDeleteUnitMutation: '/product/delete-unit',
  
    // Order Management API
    useCartCalculationMutation: '/cart/calculator',
    useGetQueueCartQuery: '/cart/queue',
  };
  