import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import {
    LayoutDashboard,
    Users,
    ShoppingCart,
    FileText,
    Settings,
    ChevronLeft,
    Menu,
    Package,
    Tags,
    Truck,
    ShoppingBag,
    Percent,
    Bell,
    ClipboardList,
    Database,
    Heart,
    UserCog,
    Image,
    Box,
    Palette,
    Star,
    MapPin,
    Send,
    Warehouse
} from 'lucide-react';

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const { url } = usePage();

    const isActive = (path) => {
        return url.startsWith(path);
    };

    const menuGroups = [
        {
            title: 'Tổng quan',
            items: [
                { title: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/admin/dashboard' },
                { title: 'Thông báo', icon: <Bell size={20} />, path: '/admin/notifications' },
            ]
        },
        {
            title: 'Quản lý sản phẩm',
            items: [
                { title: 'Sản phẩm', icon: <Package size={20} />, path: '/admin/products' },
                { title: 'Danh mục', icon: <Tags size={20} />, path: '/admin/categories' },
                { title: 'Nhà cung cấp', icon: <Truck size={20} />, path: '/admin/suppliers' },
                { title: 'Kiểm kho', icon: <ClipboardList size={20} />, path: '/admin/inventory-checks' },
                { title: 'Kích thước', icon: <Box size={20} />, path: '/admin/sizes' },
                { title: 'Màu sắc', icon: <Palette size={20} />, path: '/admin/colors' },
                { title: 'Chất liệu', icon: <Package size={20} />, path: '/admin/materials' },
                { title: 'Tag', icon: <Tags size={20} />, path: '/admin/tags' },
            ]
        },
        {
            title: 'Quản lý đơn hàng',
            items: [
                { title: 'Đơn hàng', icon: <ShoppingBag size={20} />, path: '/admin/orders' },
                { title: 'Kho hàng', icon: <Warehouse size={20} />, path: '/admin/order-warehouse' },
                { title: 'Đơn vị vận chuyển', icon: <Truck size={20} />, path: '/admin/order-shipping' },
                { title: 'Đơn nhập hàng', icon: <ShoppingCart size={20} />, path: '/admin/purchase-orders' },
                { title: 'Lịch sử đơn hàng', icon: <FileText size={20} />, path: '/admin/order-history' },
                { title: 'Thanh toán', icon: <ShoppingCart size={20} />, path: '/admin/payments' },
            ]
        },
        {
            title: 'Quản lý khách hàng',
            items: [
                { title: 'Khách hàng', icon: <Users size={20} />, path: '/admin/customers' },
                { title: 'Đánh giá', icon: <Star size={20} />, path: '/admin/reviews' },
            ]
        },
        {
            title: 'Marketing',
            items: [
                { title: 'Khuyến mãi', icon: <Percent size={20} />, path: '/admin/promotions' },
                { title: 'Gửi thông báo', icon: <Send size={20} />, path: '/admin/notifications-send' },
            ]
        },
        {
            title: 'Cài đặt hệ thống',
            items: [
                { title: 'Cấu hình', icon: <Settings size={20} />, path: '/admin/settings' },
                { title: 'Quản lý nhân viên', icon: <UserCog size={20} />, path: '/admin/staffs' },
                { title: 'Quyền & Chức vụ', icon: <Users size={20} />, path: '/admin/roles' },
            ]
        },
    ];

    return (
        <div className={`min-h-screen bg-gray-900 text-gray-300 transition-all duration-300 ${collapsed ? 'w-16' : 'w-64'}`}>
            <div className="flex items-center justify-between p-4 border-b border-gray-800">
                {!collapsed && (
                    <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Admin Panel
                    </h2>
                )}
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="p-1.5 rounded-lg hover:bg-gray-800 transition-colors"
                >
                    {collapsed ? <Menu size={20} /> : <ChevronLeft size={20} />}
                </button>
            </div>

            <nav className="mt-4 space-y-1">
                {menuGroups.map((group, groupIndex) => (
                    <div key={groupIndex} className="px-3">
                        {!collapsed && (
                            <div className="mb-2 px-4 py-2">
                                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                                    {group.title}
                                </span>
                            </div>
                        )}
                        <div className="space-y-1">
                            {group.items.map((item) => {
                                const active = isActive(item.path);
                                return (
                                    <Link
                                        key={item.path}
                                        href={item.path}
                                        className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200
                                            ${active
                                                ? 'bg-blue-600/10 text-blue-400'
                                                : 'hover:bg-gray-800 hover:text-white'
                                            }`}
                                    >
                                        <div className={`${active ? 'text-blue-400' : ''}`}>
                                            {item.icon}
                                        </div>
                                        {!collapsed && (
                                            <span className={`text-sm font-medium ${
                                                active ? 'text-blue-400' : ''
                                            }`}>
                                                {item.title}
                                            </span>
                                        )}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </nav>
        </div>
    );
};

export default Sidebar;
