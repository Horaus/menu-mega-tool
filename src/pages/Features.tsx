import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Eye, FolderPlus, Database, Zap, Shield, MousePointer2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Features = () => {
    const { t } = useLanguage();

    const features = [
        {
            icon: Eye,
            title: t("featuresPage.preview.title"),
            description: t("featuresPage.preview.desc"),
            color: "text-blue-500",
            bg: "bg-blue-50",
        },
        {
            icon: Database,
            title: t("featuresPage.drive.title"),
            description: t("featuresPage.drive.desc"),
            color: "text-green-500",
            bg: "bg-green-50",
        },
        {
            icon: FolderPlus,
            title: t("featuresPage.folder.title"),
            description: t("featuresPage.folder.desc"),
            color: "text-amber-500",
            bg: "bg-amber-50",
        },
        {
            icon: Zap,
            title: t("featuresPage.speed.title"),
            description: t("featuresPage.speed.desc"),
            color: "text-purple-500",
            bg: "bg-purple-50",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <Layout>
            <div className="py-16 md:py-24">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                            {t("featuresPage.title")}
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            {t("featuresPage.subtitle")}
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto"
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ scale: 1.02 }}
                                className="group p-8 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300 card-shadow flex flex-col items-start"
                            >
                                <div className={`p-4 rounded-xl ${feature.bg} ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <feature.icon size={32} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-2xl font-semibold text-foreground mb-4">
                                    {feature.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Additional Details Section */}
                    <div className="mt-32 grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Shield className="text-primary h-8 w-8" />
                            </div>
                            <h4 className="text-xl font-bold mb-3">Enterprise Security</h4>
                            <p className="text-muted-foreground">
                                Dữ liệu của bạn được bảo vệ bởi các tiêu chuẩn bảo mật của Google Workspace™. Chúng tôi không bao giờ lưu trữ tệp bên ngoài hệ sinh thái của bạn.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                <MousePointer2 className="text-primary h-8 w-8" />
                            </div>
                            <h4 className="text-xl font-bold mb-3">Seamless UX</h4>
                            <p className="text-muted-foreground">
                                Giao diện được thiết kế tối giản, tích hợp trực tiếp vào thanh công cụ của Google Sheets™, giúp bạn thao tác mà không cảm thấy sự gián đoạn.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Zap className="text-primary h-8 w-8" />
                            </div>
                            <h4 className="text-xl font-bold mb-3">Instant Sync</h4>
                            <p className="text-muted-foreground">
                                Mọi thay đổi về tệp và thư mục đều được đồng bộ hóa ngay lập tức với tài khoản Google Drive™ của bạn theo thời gian thực.
                            </p>
                        </motion.div>
                    </div>

                    {/* Quick Demo Section/Visuals */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mt-24 p-8 md:p-12 rounded-3xl bg-secondary/30 border border-border text-center max-w-4xl mx-auto"
                    >
                        <div className="flex justify-center mb-6">
                            <div className="relative">
                                <MousePointer2 className="text-primary animate-bounce h-12 w-12" />
                                <div className="absolute -top-1 -right-1 flex h-4 w-4">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-4 w-4 bg-primary"></span>
                                </div>
                            </div>
                        </div>
                        {/* <h2 className="text-3xl font-bold mb-4">Sẵn sàng để tăng năng suất?</h2>
                        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                            Trải nghiệm sự liền mạch giữa Google Sheets™ và Google Drive™ ngay hôm nay.
                        </p>
                        <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity">
                            {t("hero.cta")}
                        </button> */}
                    </motion.div>
                </div>
            </div>
        </Layout>
    );
};

export default Features;
