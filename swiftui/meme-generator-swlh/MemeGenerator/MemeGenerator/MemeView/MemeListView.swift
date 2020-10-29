//
//  ContentView.swift
//  MemeGenerator
//
//  Created by Fatah on 29/10/20.
//

import SwiftUI
import Combine

struct MemeListView: View {
    @ObservedObject var viewModel = ViewModel()
    
    var body: some View {
        
        // navigation
        NavigationView {
            
            // for each meme in memes
            List(viewModel.memes, id: \.self) { (meme) in
                // TODO: create our meme list item
            }
        }
        .onAppear {
            
            // fetch our memes on the load of the view
            viewModel.fetchMemes()
        }
        .navigationTitle(Text("Memes"))
    }
}

struct MemeListView_Previews: PreviewProvider {
    static var previews: some View {
        MemeListView()
    }
}

struct MemeList_Previews: PreviewProvider {
    static var previews: some View {
        MemeList()
    }
}
