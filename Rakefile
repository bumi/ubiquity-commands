# inspired by and borrowed from the awesome newgem http://newgem.rubyforge.org/ Gem Generator by Dr Nic http://www.drnicwilliams.com/
require "erb"
desc 'Generate website files'
task :website do
  targets = []
  Dir['**/readme.textile'].each do |txt|
    puts txt
    path = txt.gsub(/readme\.textile$/,'index.html')
    name = File.dirname(txt)
    targets << {:path => path, :name => name}

    sh %{ ruby script/txt2html #{txt} > #{path} }
    template = ERB.new(File.open("index.html.erb").read)
    File.open("index.html","w") do |index|
      index.puts template.result(binding)
    end
  end
end
