import { useState } from "react";
import { motion } from "framer-motion";
import { Lightbulb, Heart, TrendingUp, Upload, FileText, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import SkipLinks from "@/components/SkipLinks";
import SEO from "@/components/SEO";

const TrabalheConosco = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    linkedin: "",
    area: "",
    pretensaoSalarial: "",
    mensagem: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type === "application/pdf") {
        setSelectedFile(file);
      } else {
        toast({
          title: "Formato inválido",
          description: "Por favor, envie apenas arquivos PDF.",
          variant: "destructive",
        });
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type === "application/pdf") {
        setSelectedFile(file);
      } else {
        toast({
          title: "Formato inválido",
          description: "Por favor, envie apenas arquivos PDF.",
          variant: "destructive",
        });
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    console.log("Form Data:", formData);
    console.log("File:", selectedFile);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Candidatura enviada com sucesso!",
      description: "Entraremos em contato em breve. Obrigado pelo interesse!",
    });

    // Reset form
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      linkedin: "",
      area: "",
      pretensaoSalarial: "",
      mensagem: "",
    });
    setSelectedFile(null);
    setIsSubmitting(false);
  };

  const values = [
    {
      icon: Lightbulb,
      title: "Inovação",
      description:
        "Buscamos constantemente novas soluções e abordagens para melhor atender nossos clientes.",
    },
    {
      icon: Heart,
      title: "Compromisso",
      description:
        "Dedicação total aos direitos de nossos clientes, com ética e transparência em cada ação.",
    },
    {
      icon: TrendingUp,
      title: "Crescimento",
      description:
        "Investimos no desenvolvimento contínuo de nossa equipe e na evolução profissional de cada membro.",
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <SEO
        title="Trabalhe Conosco | Cantarelli Advocacia - Carreiras em Direito Previdenciário"
        description="Faça parte da equipe Cantarelli Advocacia. Buscamos talentos comprometidos com a excelência em Direito Previdenciário. Envie seu currículo e construa sua carreira conosco."
        keywords="trabalhe conosco, vagas advocacia, emprego direito previdenciário, carreira jurídica, Cantarelli Advocacia Recife"
        ogTitle="Trabalhe Conosco | Cantarelli Advocacia"
        ogDescription="Faça parte da nossa equipe de especialistas em Direito Previdenciário. Envie sua candidatura."
        canonical="https://cantarelliadvocacia.com.br/trabalhe-conosco"
      />
      <SkipLinks links={[
        { id: "main-content", label: "Ir para o conteúdo principal" },
        { id: "form", label: "Ir para formulário de candidatura" },
      ]} />
      <Header />

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 pt-24 pb-4">
        <Breadcrumb items={[{ label: "Trabalhe Conosco" }]} variant="dark" />
      </div>

      {/* Hero Section */}
      <section id="main-content" tabIndex={-1} className="relative pt-8 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#0a0a0a]" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#a38b58]/20 via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-alexandria text-4xl md:text-5xl lg:text-6xl font-bold text-[#ede7e4] mb-6">
              Faça Parte da Nossa Equipe
            </h1>
            <p className="text-[#c5c9ce] text-lg md:text-xl font-alexandria font-light leading-relaxed">
              Buscamos talentos que compartilham do nosso compromisso com a
              excelência na advocacia previdenciária.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-center text-3xl md:text-4xl font-alexandria font-bold text-[#ede7e4] mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Por que trabalhar conosco?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center p-8 rounded-lg border border-[#ede7e4]/20 bg-[#111]/50 backdrop-blur-sm hover:border-[#a38b58]/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#a38b58]/10 mb-6">
                  <value.icon className="w-8 h-8 text-[#a38b58]" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-alexandria font-semibold text-[#ede7e4] mb-4">
                  {value.title}
                </h3>
                <p className="text-[#c5c9ce] font-alexandria font-light leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div id="form" className="border border-[#ede7e4]/30 rounded-xl p-8 md:p-12 bg-[#111]/30 backdrop-blur-sm">
              <h2 className="text-2xl md:text-3xl font-alexandria font-bold text-[#ede7e4] mb-2 text-center">
                Envie sua Candidatura
              </h2>
              <p className="text-[#c5c9ce] text-center mb-10 font-alexandria font-light">
                Preencha o formulário abaixo para fazer parte do nosso time
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nome */}
                <div className="space-y-2">
                  <Label htmlFor="nome" className="text-[#ede7e4] font-alexandria">
                    Nome Completo *
                  </Label>
                  <Input
                    id="nome"
                    name="nome"
                    type="text"
                    required
                    value={formData.nome}
                    onChange={handleInputChange}
                    className="bg-[#0a0a0a] border-[#ede7e4]/30 text-[#ede7e4] placeholder:text-[#c5c9ce]/50 focus:border-[#a38b58] focus:ring-[#a38b58]/20"
                    placeholder="Seu nome completo"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[#ede7e4] font-alexandria">
                    E-mail *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-[#0a0a0a] border-[#ede7e4]/30 text-[#ede7e4] placeholder:text-[#c5c9ce]/50 focus:border-[#a38b58] focus:ring-[#a38b58]/20"
                    placeholder="seu@email.com"
                  />
                </div>

                {/* Telefone */}
                <div className="space-y-2">
                  <Label htmlFor="telefone" className="text-[#ede7e4] font-alexandria">
                    Telefone / WhatsApp *
                  </Label>
                  <Input
                    id="telefone"
                    name="telefone"
                    type="tel"
                    required
                    value={formData.telefone}
                    onChange={handleInputChange}
                    className="bg-[#0a0a0a] border-[#ede7e4]/30 text-[#ede7e4] placeholder:text-[#c5c9ce]/50 focus:border-[#a38b58] focus:ring-[#a38b58]/20"
                    placeholder="(00) 00000-0000"
                  />
                </div>

                {/* LinkedIn */}
                <div className="space-y-2">
                  <Label htmlFor="linkedin" className="text-[#ede7e4] font-alexandria">
                    LinkedIn (Opcional)
                  </Label>
                  <Input
                    id="linkedin"
                    name="linkedin"
                    type="url"
                    value={formData.linkedin}
                    onChange={handleInputChange}
                    className="bg-[#0a0a0a] border-[#ede7e4]/30 text-[#ede7e4] placeholder:text-[#c5c9ce]/50 focus:border-[#a38b58] focus:ring-[#a38b58]/20"
                    placeholder="https://linkedin.com/in/seu-perfil"
                  />
                </div>

                {/* Área de Interesse */}
                <div className="space-y-2">
                  <Label className="text-[#ede7e4] font-alexandria">
                    Área de Interesse *
                  </Label>
                  <Select
                    value={formData.area}
                    onValueChange={(value) =>
                      setFormData((prev) => ({ ...prev, area: value }))
                    }
                    required
                  >
                    <SelectTrigger className="bg-[#0a0a0a] border-[#ede7e4]/30 text-[#ede7e4] focus:ring-[#a38b58]/20">
                      <SelectValue placeholder="Selecione uma área" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#111] border-[#ede7e4]/30 z-50">
                      <SelectItem
                        value="juridico"
                        className="text-[#ede7e4] focus:bg-[#a38b58]/20 focus:text-[#ede7e4]"
                      >
                        Jurídico
                      </SelectItem>
                      <SelectItem
                        value="advogado"
                        className="text-[#ede7e4] focus:bg-[#a38b58]/20 focus:text-[#ede7e4]"
                      >
                        Advogado(a)
                      </SelectItem>
                      <SelectItem
                        value="estagiario"
                        className="text-[#ede7e4] focus:bg-[#a38b58]/20 focus:text-[#ede7e4]"
                      >
                        Estagiário(a) de Direito
                      </SelectItem>
                      <SelectItem
                        value="administrativo"
                        className="text-[#ede7e4] focus:bg-[#a38b58]/20 focus:text-[#ede7e4]"
                      >
                        Administrativo
                      </SelectItem>
                      <SelectItem
                        value="marketing"
                        className="text-[#ede7e4] focus:bg-[#a38b58]/20 focus:text-[#ede7e4]"
                      >
                        Marketing
                      </SelectItem>
                      <SelectItem
                        value="ti"
                        className="text-[#ede7e4] focus:bg-[#a38b58]/20 focus:text-[#ede7e4]"
                      >
                        Tecnologia da Informação (TI)
                      </SelectItem>
                      <SelectItem
                        value="rh"
                        className="text-[#ede7e4] focus:bg-[#a38b58]/20 focus:text-[#ede7e4]"
                      >
                        Recursos Humanos (RH)
                      </SelectItem>
                      <SelectItem
                        value="financeiro"
                        className="text-[#ede7e4] focus:bg-[#a38b58]/20 focus:text-[#ede7e4]"
                      >
                        Financeiro
                      </SelectItem>
                      <SelectItem
                        value="atendimento"
                        className="text-[#ede7e4] focus:bg-[#a38b58]/20 focus:text-[#ede7e4]"
                      >
                        Atendimento ao Cliente
                      </SelectItem>
                      <SelectItem
                        value="outro"
                        className="text-[#ede7e4] focus:bg-[#a38b58]/20 focus:text-[#ede7e4]"
                      >
                        Outro
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Pretensão Salarial */}
                <div className="space-y-2">
                  <Label htmlFor="pretensaoSalarial" className="text-[#ede7e4] font-alexandria">
                    Pretensão Salarial
                  </Label>
                  <Input
                    id="pretensaoSalarial"
                    name="pretensaoSalarial"
                    type="text"
                    value={formData.pretensaoSalarial}
                    onChange={handleInputChange}
                    className="bg-[#0a0a0a] border-[#ede7e4]/30 text-[#ede7e4] placeholder:text-[#c5c9ce]/50 focus:border-[#a38b58] focus:ring-[#a38b58]/20"
                    placeholder="Ex: R$ 3.000,00 ou A combinar"
                  />
                </div>

                {/* File Upload */}
                <div className="space-y-2">
                  <Label className="text-[#ede7e4] font-alexandria">
                    Currículo (PDF) *
                  </Label>
                  <div
                    className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-all duration-300 cursor-pointer ${
                      dragActive
                        ? "border-[#a38b58] bg-[#a38b58]/10"
                        : selectedFile
                        ? "border-[#a38b58]/50 bg-[#a38b58]/5"
                        : "border-[#ede7e4]/30 hover:border-[#ede7e4]/50"
                    }`}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                    onClick={() => document.getElementById("file-upload")?.click()}
                  >
                    <input
                      id="file-upload"
                      type="file"
                      accept=".pdf"
                      onChange={handleFileChange}
                      className="hidden"
                    />

                    {selectedFile ? (
                      <div className="flex items-center justify-center gap-3">
                        <FileText className="w-8 h-8 text-[#a38b58]" />
                        <div className="text-left">
                          <p className="text-[#ede7e4] font-medium">
                            {selectedFile.name}
                          </p>
                          <p className="text-[#c5c9ce] text-sm">
                            {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedFile(null);
                          }}
                          className="ml-2 p-1 hover:bg-[#ede7e4]/10 rounded-full transition-colors"
                        >
                          <X className="w-5 h-5 text-[#c5c9ce]" />
                        </button>
                      </div>
                    ) : (
                      <>
                        <Upload className="w-10 h-10 text-[#c5c9ce] mx-auto mb-3" />
                        <p className="text-[#ede7e4] font-alexandria mb-1">
                          Arraste seu currículo aqui
                        </p>
                        <p className="text-[#c5c9ce] text-sm font-alexandria">
                          ou clique para selecionar (apenas PDF)
                        </p>
                      </>
                    )}
                  </div>
                </div>

                {/* Mensagem */}
                <div className="space-y-2">
                  <Label htmlFor="mensagem" className="text-[#ede7e4] font-alexandria">
                    Mensagem (Opcional)
                  </Label>
                  <Textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleInputChange}
                    rows={4}
                    className="bg-[#0a0a0a] border-[#ede7e4]/30 text-[#ede7e4] placeholder:text-[#c5c9ce]/50 focus:border-[#a38b58] focus:ring-[#a38b58]/20 resize-none"
                    placeholder="Conte-nos um pouco sobre você e por que deseja fazer parte do nosso time..."
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting || !selectedFile || !formData.area}
                  className="w-full bg-[#ede7e4] text-[#0a0a0a] hover:bg-[#a38b58] hover:text-[#ede7e4] font-alexandria font-semibold py-6 text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Enviando..." : "Enviar Candidatura"}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default TrabalheConosco;
